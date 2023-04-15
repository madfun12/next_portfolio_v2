import TopPage from "../../components/topPage";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export default function PostPage({
    frontmatter: { title, date, image, imageAlt },
    blogs,
    content,
}) {
    const html = marked.parse(content);
    console.log(html);
    return (
        <TopPage>
            <Head>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script
                    id="MathJax-script"
                    async
                    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
                ></script>
            </Head>
            <img src={image} alt={imageAlt} className="blog-image" />
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: html }}
            ></div>
        </TopPage>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    console.log(files);

    const paths = files.map((filename) => ({
        params: {
            blogs: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { blogs } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join("posts/" + blogs + ".md"),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            blogs,
            content,
        },
    };
}
