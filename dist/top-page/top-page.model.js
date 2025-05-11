"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageModel = exports.TopLevelCategory = void 0;
var TopLevelCategory;
(function (TopLevelCategory) {
    TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
    TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
    TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
    TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory || (exports.TopLevelCategory = TopLevelCategory = {}));
class TopPageModel {
    _id;
    firsCategory;
    secondCategory;
    title;
    category;
    hh;
    advantages;
    seoText;
    tagsTitle;
    tags;
}
exports.TopPageModel = TopPageModel;
//# sourceMappingURL=top-page.model.js.map