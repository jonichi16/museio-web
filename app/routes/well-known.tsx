// temp fix for warn logs in the terminal

export const loader = () => {
  return new Response(null, { status: 204 }); // No Content
};

export default function WellKnown() {
  return null;
}
