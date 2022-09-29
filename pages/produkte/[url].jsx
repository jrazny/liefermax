//import { useRouter } from "next/router";
//import jsondb from "../../jsondb/produkte";
import Link from "next/link";
import Image from "next/Image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import mongodb from "../../utils/mongodb";
import Produkt from "../../models/Produkt";
import { useState } from "react";

export default function Produktseite({produkt}) {
  // const router = useRouter();
  // const { url } = router.query;
  // const produkt = jsondb.produkte.find((a) => a.url === url);

  const [preis, setPreis] = useState(produkt.preis);
  const [extras, setExtras] = useState([]);

  const addExtra = (e, extra) => {
    const checked = e.target.checked;
    if (checked) {
      setPreis(preis + extra.preis)
      setExtras([...extras, extra])
    } else {
        setPreis(preis - extra.preis)
        setExtras(extras.filter((alleExtras) => alleExtras._id !== extra._id))
    }
  }

  console.log(extras);

  if (!produkt) {
    return (
      <div>
        <h2>Produkt nicht vorhanden</h2>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Link href="/">
          <a className="text-dark">← zurück zur Übersicht</a>
        </Link>
      </div>

      <div className="row row-cols-2 mt-2">
        <div>
          <Image
            className="rounded-3"
            src={produkt.bild}
            alt={produkt.name}
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div>
          <h1>{produkt.name}</h1>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2 className="text-danger">{preis.toFixed(2)} €</h2>
            </ListGroupItem>
            <ListGroupItem>{produkt.beschreibung}</ListGroupItem>
            <ListGroupItem>
                {produkt.extras.length ? "Extras: " : <p></p>}
                {produkt.extras.map((extra) => (
                  <span key={extra._id}>
                    {extra.text} <input className="form-check-input me-2" 
                    type="checkbox" 
                    id={extra.text}
                    onChange={(e) => addExtra(e, extra)}
                    />
                  </span>
                ))}
            </ListGroupItem>
            <ListGroupItem>
              <input
                className="form-control w50"
                type="number"
                placeholder="1"
                min="1"
              ></input>
            </ListGroupItem>
            <ListGroupItem>
              <div className="row shadow">
                <Button variant="danger">zum Warenkorb</Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const url = context.params.url;
  await mongodb.dbConnect();
  const produkt = await Produkt.findOne({url}).lean();
  return {
    props: {
      produkt: JSON.parse(JSON.stringify(produkt))
    }
  }
}
