import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occurred!</h1>
                <p>Couldn't find this page!</p>
            </main>
        </>
    );
}

export default ErrorPage