const role = {
  id: "1",
  roleName: "Freelancer",
  createdAt: new Date(),  
}

const defaultUser = {
  id: "1",
  role,
  fullName: "Harlon Garcia",
  email: "harlongarcia@gmail.com",
  createdAt: new Date(),
  updatedAt: new Date(),
  publications: [],
  suggestions: [],
}

export const user = {
  id: '10000000-0000-0000-0000-000000000001',
  fullName: 'Breno Duarte',
  email: 'breno.duarte@example.com',
}

const suggestions = [
  {
    id: "1",
    publication: "1",
    user,
    comment: "Comentário da sugestão",
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedPrice: 100,
  },
]

export const publications = [
  {
    id: "1",
    user: defaultUser,
    title: "Web Development Project",
    description: "Looking for a skilled developer to create a responsive website.",
    suggestions,
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    user: defaultUser,
    title: "Graphic Design",
    description: "Need a creative designer for logo and branding materials.",
    suggestions,
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    user: defaultUser,
    title: "Social Media Management",
    description: "Manage our social media accounts and create content. Experience required. Must be able to work in a team and meet deadlines. Apply now! Salary negotiable. Open to remote work. Urgent need. Highly motivated individuals preferred. Flexible hours available.",
    suggestions,
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    user: defaultUser,
    title: "UX/UI Design",
    description: "Redesign our app for a better user experience.",
    suggestions,
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    user: defaultUser,
    title: "Content Writing",
    description: "Looking for a writer to create engaging blog posts.",
    suggestions,
    status: 'CLOSED',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    user: defaultUser,
    title: "SEO Optimization",
    description: "Optimize our website for better search engine ranking.",
    suggestions,
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
