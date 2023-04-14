class LinkBuilder {
  constructor() {
  this.linkDetails = {
    link: {
      name: "",
      minutes: "",
      description: "",
      image: "",
      origin: "",
      semanticName: "",
      steps: []
    },
    subLink: {
      contentType: [],
      categories: [],
      sourceSemanticName: []
    }
  };
  this.isAllowDuplicate = false;
  this.sourceType = "university";
}

setName(name) {
  this.linkDetails.link.name = name;
  return this;
}

setMinutes(minutes) {
  this.linkDetails.link.minutes = minutes;
  return this;
}

setDescription(description) {
  this.linkDetails.link.description = description;
  return this;
}

setImage(image) {
  this.linkDetails.link.image = image;
  return this;
}

setOrigin(origin) {
  this.linkDetails.link.origin = origin;
  return this;
}

setSemanticName(semanticName) {
  this.linkDetails.link.semanticName = semanticName;
  return this;
}

addStep(step) {
  this.linkDetails.link.steps.push(step);
  return this;
}

setContentType(contentType) {
  this.linkDetails.subLink.contentType = contentType;
  return this;
}

setCategories(categories) {
  this.linkDetails.subLink.categories = categories;
  return this;
}

setSourceSemanticName(sourceSemanticName) {
  this.linkDetails.subLink.sourceSemanticName = sourceSemanticName;
  return this;
}

setIsAllowDuplicate(isAllowDuplicate) {
  this.isAllowDuplicate = isAllowDuplicate;
  return this;
}

setSourceType(sourceType) {
  this.sourceType = sourceType;
  return this;
}

build() {
  return {
    linkDetails: this.linkDetails,
    isAllowDuplicate: this.isAllowDuplicate,
    sourceType: this.sourceType
  };
}
}
   
module.exports = {LinkBuilder}



 