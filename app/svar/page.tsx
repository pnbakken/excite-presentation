import CardContainer from "@/components/container/card-container";

const page = () => {
  return (
    <main
      className={`flex-c full-width full-height top-level-indent align-center justify-center`}
    >
      <div className={`flex-c full-width xl-component-width gap-md`}>
        <CardContainer />
      </div>
    </main>
  );
};

export default page;
