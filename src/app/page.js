import Content from "@/component/Content";
import MenuHorizontal from "@/component/ManuHorizontal";

export default function Home() {
  return (
    <>
      <div class="h-full ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <MenuHorizontal />

        <Content />
      </div>
    </>
  );
}
