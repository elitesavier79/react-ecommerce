import Layout from '@common/components/Layout';


const HomePages = ({ products }) => {
  const { list } = products
  
  return (
    <Layout>
       <div>
            {
              list.map((list, index) => {
                return (

                    <p key={index}>{list.name}</p>

                  )
              })
            }
        </div>
     </Layout>

    )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  }
}

export default HomePages;