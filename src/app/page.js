import data from "../data.json";

"use client";

const data = [
  { "id": 1, "firstname": "A.Anand", "lastname": "Amarzaya", "job": "no", "country": "mongol", "gmail": "anans@gmail.com", "nas": 16, "items": [{ "id": 28, "name": "mouse" }], "height": 170 },
  { "id": 2, "firstname": "B.Anand", "lastname": "Bymbatsogt", "job": "no", "country": "mongol", "gmail": "Banana@gmail.com", "nas": 16, "items": [{ "id": 29, "name": "mouse" }], "height": 190 },
  { "id": 3, "firstname": "Ankhzaya", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "ankha@gmail.com", "nas": 16, "items": [{ "id": 30, "name": "mouse" }], "height": 165 },
  { "id": 4, "firstname": "Arvidakh", "lastname": "Purevdorj", "job": "no", "country": "mongol", "gmail": "usteibugs@gmail.com", "nas": 17, "items": [{ "id": 31, "name": "mouse" }], "height": 184 },
  { "id": 5, "firstname": "Ariunbayar", "lastname": "Amgaabazar", "job": "no", "country": "mongol", "gmail": "abaya@gmail.com", "nas": 16, "items": [{ "id": 32, "name": "mouse" }], "height": 178 },
  { "id": 6, "firstname": "Batbileg", "lastname": "Enkhbat", "job": "no", "country": "mongol", "gmail": "UJustRealizedNow@gmail.com", "nas": 17, "items": [{ "id": 33, "name": "mouse" }], "height": 173 },
  { "id": 7, "firstname": "Zorigt", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "zoogii@gmail.com", "nas": 16, "items": [{ "id": 34, "name": "mouse" }], "height": 173 },
  { "id": 8, "firstname": "Zolboo", "lastname": "Azjargal", "job": "no", "country": "mongol", "gmail": "Zolboo@gmail.com", "nas": 16, "items": [{ "id": 35, "name": "mouse" }], "height": 170 },
  { "id": 9, "firstname": "Manlaibaatar", "lastname": "Ulanbayr", "job": "no", "country": "mongol", "gmail": "manlai@gmail.com", "nas": 16, "items": [{ "id": 36, "name": "mouse" }], "height": 168 },
  { "id": 10, "firstname": "Margad", "lastname": "Erdenechuluun", "job": "no", "country": "mongol", "gmail": "margad@gmail.com", "nas": 17, "items": [{ "id": 37, "name": "mouse" }], "height": 153 },
  { "id": 11, "firstname": "Munkhbold", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "boldoo@gmail.com", "nas": 16, "items": [{ "id": 38, "name": "mouse" }], "height": 180 },
  { "id": 12, "firstname": "Munkhchimeg", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "mochi@gmail.com", "nas": 16, "items": [{ "id": 39, "name": "mouse" }], "height": 165 },
  { "id": 13, "firstname": "Munkhnar", "lastname": "mdku", "job": "no", "country": "mongol", "gmail": "mona@gmail.com", "nas": 16, "items": [{ "id": 40, "name": "mouse" }], "height": 165 },
  { "id": 14, "firstname": "Nymdorj", "lastname": "Tserenpurev", "job": "no", "country": "mongol", "gmail": "tiltre@gmail.com", "nas": 17, "items": [{ "id": 41, "name": "mouse" }], "height": 175 },
  { "id": 15, "firstname": "Nymragchaa", "lastname": "Eruult", "job": "no", "country": "mongol", "gmail": "Nymka@gmail.com", "nas": 16, "items": [{ "id": 42, "name": "mouse" }], "height": 170 },
  { "id": 16, "firstname": "Purevbat", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "Purve@gmail.com", "nas": 16, "items": [{ "id": 43, "name": "mouse" }], "height": 170 },
  { "id": 17, "firstname": "Temuulen", "lastname": "Khurtsbaatar", "job": "no", "country": "mongol", "gmail": "temuulen@gmail.com", "nas": 16, "items": [{ "id": 44, "name": "mouse" }], "height": 174 },
  { "id": 18, "firstname": "Tenuun", "lastname": "Och", "job": "no", "country": "mongol", "gmail": "Tenuun@gmail.com", "nas": 16, "items": [{ "id": 45, "name": "mouse" }], "height": 170 },
  { "id": 19, "firstname": "Tergel", "lastname": "Batbaatar", "job": "no", "country": "mongol", "gmail": "tergel@gmail.com", "nas": 17, "items": [{ "id": 46, "name": "mouse" }], "height": 160 },
  { "id": 20, "firstname": "Urankhishig", "lastname": "Bat-Erdene", "job": "no", "country": "mongol", "gmail": "Urankhishig@gmail.com", "nas": 16, "items": [{ "id": 47, "name": "mouse" }], "height": 170 },
  { "id": 21, "firstname": "Tsolmon", "lastname": "Batkhishig", "job": "no", "country": "mongol", "gmail": "Tsolmon@gmail.com", "nas": 16, "items": [{ "id": 48, "name": "mouse" }], "height": 170 },
  { "id": 22, "firstname": "Tselmuun", "lastname": "Baysgalan", "job": "no", "country": "mongol", "gmail": "Tselmuun@gmail.com", "nas": 16, "items": [{ "id": 49, "name": "mouse" }], "height": 160 },
  { "id": 23, "firstname": "Tselmeg", "lastname": "Batnasan", "job": "no", "country": "mongol", "gmail": "Mogger69@gmail.com", "nas": 16, "items": [{ "id": 50, "name": "mouse" }], "height": 193 },
  { "id": 24, "firstname": "Chingun", "lastname": "Gantsatsral", "job": "no", "country": "mongol", "gmail": "chingun@gmail.com", "nas": 16, "items": [{ "id": 51, "name": "mouse" }], "height": 177 },
  { "id": 25, "firstname": "Enkhbileg", "lastname": "Erdenebaatar", "job": "no", "country": "mongol", "gmail": "Enkhbileg@gmail.com", "nas": 16, "items": [{ "id": 52, "name": "mouse" }], "height": 170 },
  { "id": 26, "firstname": "Enkhtushig", "lastname": "Sugar", "job": "no", "country": "mongol", "gmail": "Tuujii@gmail.com", "nas": 17, "items": [{ "id": 53, "name": "mouse" }], "height": 180 },
  { "id": 27, "firstname": "Erkhembileg", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "ebi@gmail.com", "nas": 16, "items": [{ "id": 54, "name": "mouse" }], "height": 176 },
];

export default function Page() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>People List</h1>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gmail</th>
            <th>NAS</th>
            <th>Height (cm)</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.gmail}</td>
              <td>{person.nas}</td>
              <td>{person.height}</td>
              <td>{person.items.map(i => i.name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}