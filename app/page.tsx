import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className={`flex-c full-width full-height top-level-indent`}>
      <div className={`flex-c full-width xl-component-width gap-md`}>
        <section>
          <Banner />
        </section>
        <section>
          
        </section>
      </div>
    </main>
  );
}