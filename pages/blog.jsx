import TopPage from "../components/topPage";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
    return (
        <TopPage>
            <h1 className="blogs-header">Blog Posts</h1>
            <div className="blogs-container">
                {posts.map((post, index) => (
                    <Link href={`blogs/${post.filename}`} key={index}>
                        <div className="blog-card">
                            <img src={post.frontmatter.image} alt="" />
                            <h3>
                                {post.frontmatter.title}
                                <span class="material-symbols-outlined">
                                    north_east
                                </span>
                            </h3>
                            <p>{post.frontmatter.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </TopPage>
    );
}

export async function getStaticProps() {
    // gets files from post dir
    const files = fs.readdirSync(path.join("posts"));

    // get filename and post meta info
    const posts = files.map((file) => {
        const filename = file.replace(".md", "");

        const markdownMeta = fs.readFileSync(path.join("posts", file), "utf-8");

        const { data: frontmatter } = matter(markdownMeta);

        return {
            filename,
            frontmatter,
        };
    });

    return {
        props: {
            posts: posts,
        },
    };
}
