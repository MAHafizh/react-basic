export default function HelloWorldHeading({text1 = "Hello", text2 = "World!", text3 = "from Spread Syntax if not provided"}) {
  return <h1>{text1} {text2} {text3}</h1>;
}