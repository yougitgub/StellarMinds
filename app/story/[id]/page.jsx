// "use client";
// import { useRouter } from 'next/router';
// import { stories } from '@/utils/data';

// export default function StoryPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const story = stories.find((s) => s.id === id);

//   if (!story) return <p>القصة غير موجودة.</p>;

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>{story.title}</h1>
//       <img src={story.image} alt={story.title} />
//       <p>هنا تكتب محتوى القصة الكاملة مع الرسوم التوضيحية أو عناصر تفاعلية.</p>
//     </div>
//   );
// }
