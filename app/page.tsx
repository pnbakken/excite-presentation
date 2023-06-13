import Banner from "@/components/banner";

export default function Home() {
  return (
    <main
      className={`flex-c full-width full-height top-level-indent align-center`}
    >
      <div
        className={`flex-c full-width xl-component-width gap-md align-center`}
      >
        <section>
          <Banner />
        </section>
        <section></section>
      </div>
    </main>
  );
}
