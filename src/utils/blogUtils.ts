import type { Language } from "./serverTranslations";

/**
 * Format a date string according to the language
 */
export function formatBlogDate(dateString: string, language: Language): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  switch (language) {
    case "Fr":
      return date.toLocaleDateString("fr-FR", options);
    case "En":
      return date.toLocaleDateString("en-US", options);
    case "Es":
      return date.toLocaleDateString("es-ES", options);
    case "De":
      return date.toLocaleDateString("de-DE", options);
    case "It":
      return date.toLocaleDateString("it-IT", options);
    default:
      return date.toLocaleDateString("fr-FR", options);
  }
}

/**
 * Extract plain text from HTML content
 */
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Create excerpt from article content
 */
export function createExcerpt(
  content: string,
  maxLength: number = 160
): string {
  const plainText = stripHtmlTags(content);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + "...";
}

/**
 * Generate blog article URL
 */
export function generateBlogUrl(
  documentId: string,
  language: Language
): string {
  const langParam = language !== "Fr" ? `?lang=${language.toLowerCase()}` : "";
  return `/blog/${documentId}${langParam}`;
}

/**
 * Generate blog list URL
 */
export function generateBlogListUrl(language: Language): string {
  const langParam = language !== "Fr" ? `?lang=${language.toLowerCase()}` : "";
  return `/blog${langParam}`;
}

/**
 * Get reading time estimate
 */
export function estimateReadingTime(content: string): number {
  const plainText = stripHtmlTags(content);
  const wordsPerMinute = 200;
  const wordCount = plainText.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get blog translations
 */
export function getBlogTranslations(language: Language) {
  const translations = {
    Fr: {
      readMore: "Lire la suite",
      publishedOn: "Publié le",
      updatedOn: "Mis à jour le",
      readingTime: "min de lecture",
      backToBlog: "Retour au blog",
      relatedArticles: "Articles similaires",
      noArticles: "Aucun article trouvé",
      loadingArticles: "Chargement des articles...",
      errorLoadingArticles: "Erreur lors du chargement des articles",
      tableOfContents: "Sommaire",
    },
    En: {
      readMore: "Read more",
      publishedOn: "Published on",
      updatedOn: "Updated on",
      readingTime: "min read",
      backToBlog: "Back to blog",
      relatedArticles: "Related articles",
      noArticles: "No articles found",
      loadingArticles: "Loading articles...",
      errorLoadingArticles: "Error loading articles",
      tableOfContents: "Table of Contents",
    },
    Es: {
      readMore: "Leer más",
      publishedOn: "Publicado el",
      updatedOn: "Actualizado el",
      readingTime: "min de lectura",
      backToBlog: "Volver al blog",
      relatedArticles: "Artículos relacionados",
      noArticles: "No se encontraron artículos",
      loadingArticles: "Cargando artículos...",
      errorLoadingArticles: "Error al cargar artículos",
      tableOfContents: "Tabla de contenidos",
    },
    De: {
      readMore: "Weiterlesen",
      publishedOn: "Veröffentlicht am",
      updatedOn: "Aktualisiert am",
      readingTime: "Min Lesezeit",
      backToBlog: "Zurück zum Blog",
      relatedArticles: "Ähnliche Artikel",
      noArticles: "Keine Artikel gefunden",
      loadingArticles: "Artikel werden geladen...",
      errorLoadingArticles: "Fehler beim Laden der Artikel",
      tableOfContents: "Inhaltsverzeichnis",
    },
    It: {
      readMore: "Leggi di più",
      publishedOn: "Pubblicato il",
      updatedOn: "Aggiornato il",
      readingTime: "min di lettura",
      backToBlog: "Torna al blog",
      relatedArticles: "Articoli correlati",
      noArticles: "Nessun articolo trovato",
      loadingArticles: "Caricamento articoli...",
      errorLoadingArticles: "Errore nel caricamento degli articoli",
      tableOfContents: "Indice",
    },
  };

  return translations[language] || translations.Fr;
}
