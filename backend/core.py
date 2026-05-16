from wordfreq import iter_wordlist

# build top 20k words
words = []
for i, w in enumerate(iter_wordlist("en")):
    words.append(w)
    if i >= 20000:
        break

def shingles(word, k=2):
    return set(word[i:i+k] for i in range(len(word)-k+1))

# precompute dictionary
DICTIONARY = {w: shingles(w) for w in words}