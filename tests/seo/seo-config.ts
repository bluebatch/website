/**
 * SEO Internal Linking Test Suite — Configuration
 *
 * Adjust thresholds here to tune pass/fail sensitivity.
 * Each test produces a score 0–100 and compares against its passThreshold.
 */

export const seoConfig = {
  /** Test 1: Content Hub Completeness */
  contentHubs: {
    passThreshold: 70,
    /** Hub with this many children gets full base score */
    minChildrenForFullScore: 5,
    /** Hub with fewer children than this gets half base score */
    minChildrenForHalfScore: 2,
  },

  /** Test 2: Contextual Links (body vs nav/footer) */
  contextualLinks: {
    passThreshold: 60,
    /** Minimum internal links inside <main> for normal pages */
    minLinksPerPage: 2,
  },

  /** Test 3: Orphan Page Detection */
  orphanPages: {
    passThreshold: 90,
  },

  /** Test 4: Anchor Text Quality */
  anchorText: {
    passThreshold: 70,
    /** These anchor texts are flagged as generic/bad */
    bannedAnchors: [
      "hier",
      "hier klicken",
      "mehr",
      "mehr erfahren",
      "click here",
      "link",
      "read more",
      "learn more",
    ],
  },
};
