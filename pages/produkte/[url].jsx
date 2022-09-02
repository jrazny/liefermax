import { useRouter } from "next/router";
import jsondb from "../../jsondb/produkte";

export default function Produktseite() {
    const router = useRouter();
    const {url} = router.query;
    const produkt = jsondb.produkte.find((a) => a.url === url)

    if (!produkt) {
        return (
            <div>
                <h2>
                    Produkt nicht vorhanden
                </h2>
            </div>
        )
    }

    return (
        <div>{produkt.beschreibung}</div>
    )
}
