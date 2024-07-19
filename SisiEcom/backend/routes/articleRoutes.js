const express = require('express');
const router = express.Router();
const { Article, validateArticle } = require('../models/article');

// Get all articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get an article by ID
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new article
router.post('/', async (req, res) => {
    const { error } = validateArticle(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const article = new Article(req.body);
    try {
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an article
router.put('/:id', async (req, res) => {
    const { error } = validateArticle(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an article
router.delete('/:id', async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndRemove(req.params.id);
        if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
