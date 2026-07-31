interface Props {
  image: string;
  title: string;
}

export default function ProjectCardImage({
  image,
  title,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}