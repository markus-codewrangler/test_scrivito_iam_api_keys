require("dotenv").config();
const Scrivito = require("scrivito");

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  apiKey: {
    clientId: process.env.IAM_CLIENT_ID,
    clientSecret: process.env.IAM_CLIENT_SECRET,
  },
});

Scrivito.load(() => Scrivito.Obj.onAllSites().get(process.env.OBJ_ID)).then(
  (obj) => {
    if (!obj) {
      throw Error("Houston, we got a problem!");
    }

    console.log("protected obj", obj, obj.id());
  }
);

Scrivito.load(() => Scrivito.Obj.onAllSites().all().count()).then((count) =>
  console.log("count", count)
);
