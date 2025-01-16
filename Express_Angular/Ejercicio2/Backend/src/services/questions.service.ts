import { Question } from '../interfaces/questions.interface'

class QuestionsService {
  private questions: Question[] = [
    {
      id: 1,
      category: 'science',
      question: 'What is the chemical symbol for water?',
      answer: 'H2O',
      options: ['H2O', 'O2', 'CO2', 'NaCl'],
    },
    {
      id: 2,
      category: 'sports',
      question: 'Which country has won the most FIFA World Cups?',
      answer: 'Brazil',
      options: ['Germany', 'Italy', 'Brazil', 'Argentina'],
    },
    {
      id: 3,
      category: 'history',
      question: 'Who was the first President of the United States?',
      answer: 'George Washington',
      options: [
        'George Washington',
        'Abraham Lincoln',
        'John Adams',
        'Thomas Jefferson',
      ],
    },
    {
      id: 4,
      category: 'geography',
      question: 'Which is the largest desert in the world?',
      answer: 'Sahara Desert',
      options: [
        'Gobi Desert',
        'Sahara Desert',
        'Kalahari Desert',
        'Antarctica',
      ],
    },
    {
      id: 5,
      category: 'technology',
      question: 'Who is known as the father of computers?',
      answer: 'Charles Babbage',
      options: [
        'Alan Turing',
        'Charles Babbage',
        'Ada Lovelace',
        'John von Neumann',
      ],
    },
    {
      id: 6,
      category: 'movies',
      question: 'Which movie won the Oscar for Best Picture in 1994?',
      answer: 'Forrest Gump',
      options: [
        'The Shawshank Redemption',
        'Pulp Fiction',
        'Forrest Gump',
        'Four Weddings and a Funeral',
      ],
    },
    {
      id: 7,
      category: 'music',
      question: 'Who is known as the King of Pop?',
      answer: 'Michael Jackson',
      options: [
        'Elvis Presley',
        'Prince',
        'Michael Jackson',
        'Freddie Mercury',
      ],
    },
    {
      id: 8,
      category: 'books',
      question: "Who wrote 'Pride and Prejudice'?",
      answer: 'Jane Austen',
      options: [
        'Emily Brontë',
        'Charles Dickens',
        'Jane Austen',
        'Virginia Woolf',
      ],
    },
    {
      id: 9,
      category: 'games',
      question: 'What is the best-selling video game of all time?',
      answer: 'Minecraft',
      options: ['Tetris', 'Minecraft', 'GTA V', 'Call of Duty'],
    },
    {
      id: 10,
      category: 'politics',
      question:
        'Who is the current Secretary-General of the United Nations (as of 2025)?',
      answer: 'António Guterres',
      options: [
        'Ban Ki-moon',
        'António Guterres',
        'Kofi Annan',
        'Boutros Boutros-Ghali',
      ],
    },
    {
      id: 11,
      category: 'science',
      question: 'What planet is known as the Red Planet?',
      answer: 'Mars',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      id: 12,
      category: 'science',
      question: 'What is the powerhouse of the cell?',
      answer: 'Mitochondria',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
    },
    {
      id: 13,
      category: 'science',
      question: "What is the most abundant gas in Earth's atmosphere?",
      answer: 'Nitrogen',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
    },
    {
      id: 14,
      category: 'science',
      question: 'What is the chemical symbol for gold?',
      answer: 'Au',
      options: ['Au', 'Ag', 'Pb', 'Fe'],
    },
    {
      id: 15,
      category: 'science',
      question: 'What is the speed of light in vacuum?',
      answer: '299,792 km/s',
      options: ['300,000 km/s', '299,792 km/s', '280,000 km/s', '310,000 km/s'],
    },
  ]

  public getRandomQuestion(): Question {
    return this.randomQuestion()
  }

  getRandomsQuestion(limit: number): Question[] | null {
    if (limit > this.questions.length) return null

    const questions = []

    for (let i = 0; i < limit; i++) {
      questions.push(this.randomQuestion())
    }

    return questions
  }

  getQuestionByCategory(category: string): Question | null {
    const questionByCategory = this.questions.filter(
      (question) => question.category === category
    )

    if (questionByCategory.length === 0) return null

    return questionByCategory[0]
  }

  getQuestionsByCategory(category: string, limit: number): Question[] | null {
    const questionByCategory = this.questions.filter(
      (question) => question.category === category
    )

    if (questionByCategory.length === 0) return null

    if (limit > questionByCategory.length) return null

    const questions = []

    for (let i = 0; i < limit; i++) {
      questions.push(questionByCategory[i])
    }

    return questions
  }

  randomQuestion(): Question {
    const indexRandom = Math.floor(Math.random() * 15)
    return this.questions[indexRandom]
  }
}

export default new QuestionsService()
