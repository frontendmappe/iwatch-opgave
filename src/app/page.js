import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <header></header>
      </section>
      <section>
        <div>
          <h1></h1>
          <p></p>
        </div>
        <div>
          <button></button>
        </div>
        <div>
          <Image src="/navy.png" alt="Description" width={500} height={300} />
          {/* <Component></Component> */}
        </div>

        <div>{/* <Component></Component> */}</div>

        <div className="imgcomponentsbg">{/* <Component></Component> */}</div>
      </section>
    </main>
  );
}
