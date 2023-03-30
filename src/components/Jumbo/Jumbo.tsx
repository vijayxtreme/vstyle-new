import { JumboTron } from "./JumboStyled";
import { EN_US as lang } from "@/lang/en-US";
import { upper } from "@/util/util";

export const Jumbo = () => {
  return (
    <JumboTron>
      <h1>Sr. Software Engineer</h1>
      <span>[Vijay.Menon]</span>
      <section>
        <p className="mt-5">
          {lang.social.map((item, index) => (
            <a key={index} target="_blank" rel="noreferrer" href={item.url}>
              {upper(item.name)}
            </a>
          ))}
        </p>
      </section>
    </JumboTron>
  );
};
