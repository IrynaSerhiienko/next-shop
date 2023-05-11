import Heading from "./Heading";

export default function CakeInfo ({ cake }) {
  const { title, body } = cake || {};

  if (!cake) {
    return <Heading tag="h3" text="Empty cake" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}
