const BlogSections = ({ section }) => {
  const { sectionTitle, content } = section;
  return <div className="mt-2">
    <h3 className="text-lg font-semibold">{sectionTitle}</h3>
    <p className="text-sm">{content}</p>
  </div>;
};

export default BlogSections;
