import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
Growing up with immigrant parents, an early dyslexia diagnosis, and a deep passion for gaming and engineering has profoundly shaped my understanding of diversity, inclusion, and resilience. Each of these aspects of my background has influenced how I connect with others, approach challenges, and view the world.

During the pandemic, social interactions became limited, but I found community in online gaming, where I joined a group focused on world-building in games like Minecraft. While gaming brought us together, this space also became a valuable support system during an isolating time. Public servers restricted our creativity, so I proposed the idea of creating a custom, cloud-based server to give us full control over the environment. The technical challenge of setting up the server and leading the group pushed me to learn about cloud infrastructure, cost management, and the complexities of server customization. Collaborating with peers from different backgrounds and age groups taught me the importance of patience, clear communication, and inclusion. By involving younger players and fostering creativity, I saw firsthand how diverse perspectives strengthen a community, even a virtual one.

My early experience with dyslexia also instilled in me an understanding of the value of inclusion and support. Diagnosed when I was just two, I had to work twice as hard to keep up with reading and writing, relying on my family’s encouragement and relentless practice. Although some teachers and peers doubted my abilities, I became more determined to pursue my interests, particularly in mathematics and engineering. This challenge has helped me build resilience and empathy, qualities that drive me to advocate for inclusivity and support for others facing obstacles. I understand the frustration and the need for patience when tackling challenges, and I carry that awareness into every interaction, aiming to be both supportive and understanding.

Having immigrant parents who started with nothing in the U.S. has instilled in me a sense of gratitude and responsibility. My parents moved from Ukraine to seek a better life, overcoming language barriers, cultural shifts, and limited resources. Watching them build successful careers in the technology sector with resilience and determination has inspired me to follow their example. Their journey has shaped my belief that diversity is a strength, bringing fresh perspectives to any field, especially in a collaborative setting. Their hard work and perseverance motivate me to contribute meaningfully to a field that can benefit everyone, like aerospace engineering. I view my goals not only as personal achievements but as a way to honor their sacrifices and positively impact others.

Through these diverse experiences—building community online, overcoming dyslexia, and learning from my parents—I’ve developed a unique perspective on diversity and inclusion. I see resilience as essential not just for personal success but for supporting others on their paths. Whether in a gaming group, a classroom, or a future professional setting, I aim to foster environments where everyone feels valued, supported, and encouraged to grow. My journey has taught me that challenges can be transformed into strengths, and that inclusion, collaboration, and understanding can create communities where everyone can thrive.
