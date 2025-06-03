import sys
import json
import google.generativeai as genai

GEMINI_API_KEY = "REPLACE_YOUR_GEMINI_API_KEY"

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("models/gemini-1.5-pro-latest")

def get_keywords(seed):
    prompt = f"Suggest 5 related keywords for '{seed}'. Return them as a comma-separated list."
    response = model.generate_content(prompt)
    keywords = [k.strip() for k in response.text.split(",") if k.strip()]
    return {"keywords": keywords[:5]}

def get_titles(keyword):
    prompt = (
        f"Generate 3 SEO-optimized blog post titles for the keyword '{keyword}' in a professional tone. "
        "Return each title on a new line."
    )
    response = model.generate_content(prompt)
    titles = [t.strip("- ").strip() for t in response.text.split("\n") if t.strip()]
    return {"titles": titles[:3]}

def get_topics(title):
    prompt = (
        f"Suggest 2 blog post topics or a single outline for the title '{title}'. "
        "Return each topic or outline item on a new line."
    )
    response = model.generate_content(prompt)
    topics = [t.strip("- ").strip() for t in response.text.split("\n") if t.strip()]
    return {"topics": topics[:2]}

def get_content(keyword, topic):
    prompt = (
        f"Write a short SEO-optimized blog introduction (100-200 words) about '{topic}' using the keyword '{keyword}'."
    )
    response = model.generate_content(prompt)
    return {"content": response.text.strip()}

if __name__ == "__main__":
    try:
        if len(sys.argv) < 3:
            print(json.dumps({"error": "Not enough arguments"}))
            sys.exit(1)
        endpoint = sys.argv[1]
        payload = json.loads(sys.argv[2])
        if endpoint == "keywords":
            print(json.dumps(get_keywords(payload["seed"])))
        elif endpoint == "titles":
            print(json.dumps(get_titles(payload["keyword"])))
        elif endpoint == "topics":
            print(json.dumps(get_topics(payload["title"])))
        elif endpoint == "content":
            print(json.dumps(get_content(payload["keyword"], payload["topic"])))
        else:
            print(json.dumps({"error": "Invalid endpoint"}))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
