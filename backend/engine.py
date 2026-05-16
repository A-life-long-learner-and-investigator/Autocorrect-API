from core import DICTIONARY, shingles
from Levenshtein import distance

def jaccard(a, b):
    return len(a & b) / len(a | b)

def autocorrect(word):
    word_sh = shingles(word)

    # filter candidates
    candidates = [
        w for w, sh in DICTIONARY.items()
        if jaccard(word_sh, sh) > 0.3
    ]

    if not candidates:
        candidates = list(DICTIONARY.keys())

    # best match
    return min(candidates, key=lambda w: distance(word, w))