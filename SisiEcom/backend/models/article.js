const mongoose = require('mongoose');
const Joi = require('joi');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    discount: { type: Number, default: 0 },
});

const Article = mongoose.model('Article', articleSchema);

const validateArticle = (article) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        image: Joi.string().required(),
        discount: Joi.number().min(0).max(100),
    });
    return schema.validate(article);
};

module.exports = { Article, validateArticle };
