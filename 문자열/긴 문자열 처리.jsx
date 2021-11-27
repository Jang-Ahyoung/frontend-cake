export default function App() {
    const string = "예시 문자열 작성, 예시 문자열 작성, 예시 문자열 작성";

    function truncate(string, n) {
        return string?.length > 10
            ? string.substr(0, n - 1).concat("...")
            : string;
    }

    return (
        <div>
            {truncate(string, 6)}
        </div>
    )
}
