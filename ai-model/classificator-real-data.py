from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression, SGDClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from sklearn.datasets import load_files
import time
import joblib

categories = ['allowed', 'forbidden']
start_time = time.time()
data = load_files('./', categories=categories, random_state=42)
print(data.target_names)

X_train, X_test, Y_train, Y_test = train_test_split(data.data, data.target, test_size=0.2, random_state=42) 


# classifier = Pipeline([('vect', CountVectorizer()),
#                      ('tfidf', TfidfTransformer()),
#                      ('clf', MultinomialNB()),
# ])

classifier = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', LogisticRegression())
])

"""
classifier = Pipeline([('vect', CountVectorizer()),
                     ('tfidf', TfidfTransformer()),
                     ('clf-svm', SGDClassifier(loss='hinge', penalty='l2',
                                          alpha=1e-3, random_state=42)),
])
"""


classifier = classifier.fit(X_train, Y_train)
predicted = classifier.predict(X_test)
print("--- %s seconds ---" % (time.time() - start_time))
result = np.mean(predicted == Y_test)
print(result)

joblib.dump(classifier, 'text_classifier_model.joblib')