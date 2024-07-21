import React from "react";
import clsx from "clsx";
import { ThemeClassNames, PageMetadata } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();

  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function Hits() {
  const { metadata } = useDoc();

  const blog_link = "https://hanrotg.github.io";
  const hits_url = "https://hits.seeyoufarm.com/api/count/incr/badge.svg";

  if (metadata?.permalink) {
    var content_link = metadata.permalink;
    var hits = `${hits_url}?url=${blog_link}%2F${content_link}%2Fhit-counter&count_bg=%230078D7&title_bg=%23A8A8A8&icon=&icon_color=%23E7E7E7&title=page+view`;

    return (
      <a href="https://hits.seeyoufarm.com">
        <img src={hits} />
      </a>
    );
  }
}

export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();

  return (
    <>
      <Hits />
      <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
        {syntheticTitle && (
          <header>
            <Heading as="h1">{syntheticTitle}</Heading>
          </header>
        )}

        <MDXContent>{children}</MDXContent>
      </div>
    </>
  );
}
