function New() {
    const download = (e) => {
        console.log(e.target.href);
        fetch(e.target.href, {
            method: "get",
            headers: {},
        })
            .then((response) => {
                response.arraybuffer().then(function (buffer) {
                    const url = window.url.createobjecturl(new blob([buffer]));
                    const link = document.createelement("a");
                    link.href = url;
                    link.setattribute("download", "image.png"); //or any other extension
                    document.body.appendchild(link);
                    link.click();
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div classname="app">
            <a
                href="https://oaidalleapiprodscus.blob.core.windows.net/private/org-lNbs2FE0x2s3DSGDB48dK1Tl/user-S0HrEdjZCDA4YyqwtOjcszE1/img-ZYFrbElyQaYIJCjcESCdHV5n.png?st=2023-11-11T13%3A10%3A43Z&se=2023-11-11T15%3A10%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-11T04%3A42%3A03Z&ske=2023-11-12T04%3A42%3A03Z&sks=b&skv=2021-08-06&sig=sYBs0AXw4bZG5wmszkaPBB8PTl2EgJM5U/ZFplTU55Q%3D"
                download
                onClick={(e) => download(e)}
            >
                <i classname="fa fa-download" />
                download
            </a>
        </div>
    );
}

export default New;