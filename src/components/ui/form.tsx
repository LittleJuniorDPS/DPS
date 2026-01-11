import React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function EnquiryForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (data: any) => {
    console.log("🔵 Form submitted with data:", data);
    
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      console.log("🔵 Attempting to fetch API...");
      
      const res = await fetch("http://localhost:3001/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("🔵 Response received:", res.status, res.statusText);

      const result = await res.json();
      console.log("🔵 Response JSON:", result);

      if (result.success) {
        console.log("✅ Success! Resetting form...");
        setSuccess(true);
        reset();
      } else {
        console.error("❌ Server returned success:false");
        setError(result.error || "Submission failed");
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError("Network error: " + (err as Error).message);
      alert("Submission failed: " + (err as Error).message);
    } finally {
      setLoading(false);
      console.log("🔵 Loading state set to false");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input 
        {...register("childName")} 
        placeholder="Child Name" 
        required 
        className="w-full p-2 border rounded"
      />
      <input 
        type="number" 
        {...register("childAge")} 
        placeholder="Age" 
        required 
        className="w-full p-2 border rounded"
      />
      <input 
        {...register("parentName")} 
        placeholder="Parent Name" 
        required 
        className="w-full p-2 border rounded"
      />
      <input 
        {...register("phone")} 
        placeholder="Phone" 
        required 
        className="w-full p-2 border rounded"
      />
      <input 
        {...register("email")} 
        placeholder="Email (optional)" 
        className="w-full p-2 border rounded"
      />
      <select 
        {...register("class")}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Class</option>
        <option value="nursery">Nursery</option>
        <option value="lkg">LKG</option>
        <option value="ukg">UKG</option>
      </select>
      <textarea 
        {...register("message")} 
        placeholder="Message" 
        className="w-full p-2 border rounded"
      />

      <button 
        type="submit" 
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin inline mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="inline mr-2" />
            Submit
          </>
        )}
      </button>

      {success && (
        <div className="text-green-600 flex gap-2 items-center p-3 bg-green-50 rounded">
          <CheckCircle /> Enquiry submitted successfully
        </div>
      )}

      {error && (
        <div className="text-red-600 p-3 bg-red-50 rounded">
          Error: {error}
        </div>
      )}
    </form>
  );
}