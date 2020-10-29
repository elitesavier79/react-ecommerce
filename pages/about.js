import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const About = () => {
	const isClientRender =() => ![typeof window, typeof document].includes("undefined");
	console.log(">>",isClientRender())
	
	return (
		<div>
		<h1> About page </h1>
		<Link href ="/">
			<a>Kembali ke home page </a>
		</Link>	
		<Avatar alt="super" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/12/12d75a6ec3520bb9ccb9f18376000aeed25994ae.jpg" />

		<Chip label ="ini contoh dari chip" />

		</div>
		)
}

export default About;