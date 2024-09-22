import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section className="flex gap-4 py-8 md:py-10 justify-around items-center">
        <div className="inline-block max-w-xl">
          <span className={title()}>HALAL&nbsp;</span>
          <span className={title({ color: "green" })}>LINK&nbsp;</span>
          <span className={subtitle()}>Ini nanti slogan usahanya apa</span>
        </div>

        <div className="inline-block">Ini Logonya nanti</div>
      </section>

      {/* About Section */}

      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl">
          <span className={title()}>Tentang HALAL&nbsp;</span>
          <span className={title({ color: "green" })}>LINK&nbsp;</span>
        </div>

        <div>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl cursus
          fermentum augue ad nam morbi suspendisse? Platea nascetur netus
          convallis, at ultricies posuere. Non dignissim gravida interdum
          elementum finibus praesent in purus. Facilisi litora viverra pulvinar
          malesuada tortor elit egestas penatibus scelerisque. Hac conubia
          elementum euismod imperdiet semper. Hac parturient morbi nisi ut
          tortor habitasse consectetur porta nisi. Curae arcu laoreet phasellus
          libero curabitur curabitur ornare luctus. Vehicula diam aliquet per
          finibus ipsum penatibus interdum. Integer nulla nisi ipsum dui blandit
          taciti. Nulla egestas arcu bibendum integer fringilla potenti auctor
          etiam. Interdum augue dictum blandit conubia sodales maecenas
          convallis himenaeos. Molestie feugiat himenaeos sociosqu est per
          viverra sollicitudin justo volutpat. Eu ornare nascetur rhoncus ut
          donec pharetra curae. Ultricies scelerisque risus sapien platea
          efficitur bibendum. Dapibus ridiculus dis ante vivamus tellus. Conubia
          tempus dictum ante rhoncus dolor platea vitae gravida. Placerat
          euismod a maximus himenaeos ultricies. Elementum fermentum in mi
          malesuada nisl risus congue. Tempor eget aptent porttitor per nisl
          ultricies sociosqu odio ultricies. Nec taciti pretium felis hac amet
          consectetur enim ultricies. Ligula curae interdum litora tincidunt
          erat; parturient tristique. Quam magnis nam platea venenatis metus
          natoque proin. Hendrerit tortor venenatis dui dolor suspendisse luctus
          suscipit dignissim. Nascetur turpis quam facilisi pharetra nunc porta.
          Habitasse risus suspendisse id conubia penatibus non. Nec volutpat
          lobortis augue dictum tincidunt fames. Nullam felis montes congue
          vivamus laoreet. Ornare adipiscing penatibus consequat vitae viverra
          ut mi viverra maximus. Penatibus nullam ante mi neque porttitor augue
          potenti velit. Pretium sed faucibus tortor accumsan, litora etiam quam
          est taciti. Molestie mus sed nunc leo aenean odio porta. Phasellus
          penatibus a hendrerit proin a netus. Elit convallis cras blandit;
          cursus quam dignissim magna accumsan suscipit. Morbi molestie quisque
          non eros, eu class et. Erat habitasse rhoncus enim quisque neque,
          curabitur luctus faucibus. Vehicula habitasse libero lacinia fermentum
          turpis augue est suscipit. Adipiscing class eleifend purus nam donec
          pulvinar nibh. Commodo imperdiet erat tortor vestibulum enim integer
          id. Aliquam interdum dictumst a ullamcorper class congue praesent
          bibendum. Sollicitudin maecenas in blandit potenti rhoncus nec
          dapibus.
        </div>
      </section>

      {/* Product Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10 items-center">
        <div className="inline-block max-w-xl">
          <span className={title({ color: "blue" })}>Product&nbsp;</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl">
          <span className={title({ color: "violet" })}>Contact&nbsp;</span>
          <span className={title()}>Me&nbsp;</span>
        </div>
      </section>
    </main>
  );
}
