import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

async function run(text){
  const result = await hf.chatCompletion({
    model : "mistralai/Mistral-7B-Instruct-v0.2",
    messages : [
      {role : "system",content : "You are my teacher "},
      {role : "user" , content : text }
    ],
    max_tokens : 500
  });

  console.log(result.choices[0].message.content);
}

run("My name is Priyadharshini , i want to know the meaning for my name ");