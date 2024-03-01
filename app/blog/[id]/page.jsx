export async function generateMetadata({params}){
    return{
        title: '...'
    }
}

const Blog = ({params}) => {
    return (
      <div>
        Blog {params.id}
      </div>
    )
  }
  
  export default Blog

  