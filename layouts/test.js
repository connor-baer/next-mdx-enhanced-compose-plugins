export default frontMatter => {
  return ({ children }) => {
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        {children}
      </div>
    )
  }
}
