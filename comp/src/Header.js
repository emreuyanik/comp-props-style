//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

function Header() {
  //*   JS alani
  const mesaj = "hello"
  console.log(mesaj)

  return (
    <header>
      {/* JSX */}
      <h1>Header {mesaj}</h1>
    </header>
  )
}
export default Header
