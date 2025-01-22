import EditForm from "../../components/EditForm";
import axios from "axios";

const getProjectByID = async (id) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await axios.get(`${baseURL}/api/projects/${id}`, {
      headers: { 
        "Cache-Control": "no-store",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching Project:", error);
    return null;
  }
};

export default async function Page({ params }) {
  const { id } = params;

  if (!id) {
    console.error("ID not found in params:", params);
    return <div>Error: Invalid ID</div>;
  }

  try {
    const data = await getProjectByID(id);

    if (!data || !data.project) {
      console.error("Failed to Fetch Project:", data);
      return <div>Error: Could not fetch Project</div>;
    }

    const { title, description } = data.project;

    return (
      <EditForm
        id={id}
        title={title}
        description={description}
      />
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    return <div>Error: Something went wrong</div>;
  }
}