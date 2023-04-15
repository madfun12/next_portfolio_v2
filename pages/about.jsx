import TopPage from "../components/topPage";

export default function About() {
    return (
        <TopPage>
            <div className="about-page">
                <img
                    src="/images/whoareyou.gif"
                    alt="GIF meme of the kazoo kid asking who you are"
                />
                <h1 className="about-header">About me</h1>
                <div className="row">
                    <img
                        className="pfp"
                        src="/images/pfp.jpg"
                        alt="A picture of me looking dapper!"
                    />
                    <p>
                        My name is Madison! I'm a front end web developer who
                        specializes in making web accessible and user friendly
                        content! I'm an unapologetic emoji user 💯 and I'm here
                        to share my learning process. This site is just a
                        collection of different blog posts and projects that I'm
                        working on at any given moment. If you really want to
                        learn more about me, hopefully I'll be putting some more
                        content below for you to do so.
                    </p>
                </div>
            </div>
        </TopPage>
    );
}
