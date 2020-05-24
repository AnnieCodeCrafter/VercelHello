import Link from 'next/link'
import faker from 'faker'

const Index = ({ name }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello World!</p>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
	</div>
	<div>

	<Link href="/contact">
	  <a> Contact Page </a>
	</Link>
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  // The name will be generated at build time only
  const name = faker.name.findName()

  return {
    props: { name },
  }
}
