class Country {
  fields = {
    id: null,
    name: null,
    flag_url: null,
  };

  constructor(id, name, flag_url = null) {
    this.fields.id = id;
    this.fields.name = name;
    this.fields.flag_url = flag_url || null;
  }

  json() {
    return this.fields;
  }

  getName() {
    return this.fields.name;
  }
  getFlagUrl() {
    return this.fields.flag_url;
  }
  setFlagUrl(flag_url) {
    this.fields.flag_url = flag_url;
  }
}

exports.Country = Country;
