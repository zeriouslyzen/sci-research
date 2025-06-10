'use client';
import React, { useState } from 'react';

const BOARDS = [
  { key: 'research', label: 'Δ Research' },
  { key: 'dreams', label: 'Ψ Dreams' },
  { key: 'nodes', label: '⦿ Symbolic Nodes' },
  { key: 'myth', label: 'Φ Myth' },
];

const EXAMPLE_POSTS = [
  // Research
  { id: 1, board: 'research', author: 'Δcaptainjack', content: 'Discovered a new resonance pattern in the data. Anyone else seeing this?', comments: [
    { author: 'Ψparadox', content: 'Yes! I noticed a similar pattern in my dream journal.' },
    { author: 'Φmythos', content: 'This echoes an ancient myth about the "Resonant Bridge".' },
  ] },
  { id: 2, board: 'research', author: '⦿nodeweaver', content: 'Linked three new datasets to the main node. The geometry shifted.', comments: [
    { author: 'Δcaptainjack', content: 'Can you share the node map?' },
  ] },
  // Dreams
  { id: 3, board: 'dreams', author: 'Ψparadox', content: 'Dreamed of a library with infinite doors. Each door was a new research node.', comments: [
    { author: 'Δcaptainjack', content: 'I had a similar dream last week.' },
  ] },
  { id: 4, board: 'dreams', author: 'Φmythos', content: 'Saw a glowing triangle floating above a river. Felt like a message.', comments: [
    { author: 'Ψparadox', content: 'Triangles often symbolize convergence.' },
  ] },
  // Symbolic Nodes
  { id: 5, board: 'nodes', author: '⦿nodeweaver', content: 'Connected a mythic archetype node to the resonance graph.', comments: [
    { author: 'Φmythos', content: 'This could unlock a new phase.' },
  ] },
  { id: 6, board: 'nodes', author: 'Δcaptainjack', content: 'Node "Δ-42" is now linked to the Synchronicity Index.', comments: [
    { author: '⦿nodeweaver', content: 'Tracking the index now.' },
  ] },
  // Myth
  { id: 7, board: 'myth', author: 'Φmythos', content: 'The legend of the "Echoing Sphere" matches our latest findings.', comments: [
    { author: 'Δcaptainjack', content: "Let's add this to the codex." },
  ] },
  { id: 8, board: 'myth', author: 'Ψparadox', content: 'Found a mythic pattern in the dream logs: spiral, triangle, bridge.', comments: [
    { author: 'Φmythos', content: 'Classic symbols of transformation.' },
  ] },
];

export default function VisionsPage() {
  const [selectedBoard, setSelectedBoard] = useState('research');
  const [posts, setPosts] = useState(EXAMPLE_POSTS);
  const [newPost, setNewPost] = useState('');
  const [commentDrafts, setCommentDrafts] = useState<Record<number, string>>({});

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), board: selectedBoard, author: 'Δcaptainjack', content: newPost, comments: [] }, ...posts]);
      setNewPost('');
    }
  };

  const handleComment = (postId: number) => {
    const comment = commentDrafts[postId];
    if (comment && comment.trim()) {
      setPosts(posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, { author: 'Δcaptainjack', content: comment }] } : post));
      setCommentDrafts({ ...commentDrafts, [postId]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-2 py-8">
      {/* Boards */}
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {BOARDS.map(board => (
          <button
            key={board.key}
            className={`rounded p-3 font-bold text-center border transition-colors ${selectedBoard === board.key ? 'bg-cyan-900/80 border-cyan-400 text-cyan-300' : 'bg-black/80 border-gray-800 text-white hover:bg-cyan-900/40'}`}
            onClick={() => setSelectedBoard(board.key)}
          >
            {board.label}
          </button>
        ))}
      </div>
      {/* New Post */}
      <div className="w-full max-w-2xl mb-8 rounded bg-black/80 border border-gray-800 p-4 flex flex-col">
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder={`Share a new vision, research, or dream in ${BOARDS.find(b => b.key === selectedBoard)?.label}...`}
          className="w-full bg-black text-white text-sm font-mono rounded p-2 focus:outline-none mb-2 border border-gray-800"
          rows={2}
        />
        <button onClick={handlePost} className="self-end px-4 py-1 rounded bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-500 transition">Share</button>
      </div>
      {/* Posts */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {posts.filter(post => post.board === selectedBoard).map(post => (
          <div key={post.id} className="rounded bg-black/80 border border-gray-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-cyan-400">{post.author}</span>
              <span className="text-xs text-gray-400">in {BOARDS.find(b => b.key === post.board)?.label}</span>
            </div>
            <div className="mb-3 text-white text-sm font-mono whitespace-pre-line">{post.content}</div>
            {/* Node linking and symbolic actions */}
            <div className="flex gap-3 mb-2">
              <button className="text-xs text-cyan-400 hover:underline">Converge</button>
              <button className="text-xs text-fuchsia-400 hover:underline">Echo</button>
              <button className="text-xs text-yellow-400 hover:underline">Link Node</button>
            </div>
            {/* Comments */}
            <div className="flex flex-col gap-2 mt-2">
              {post.comments.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="font-bold text-cyan-300">{c.author}</span>
                  <span>{c.content}</span>
                </div>
              ))}
              <div className="flex gap-2 mt-1">
                <input
                  value={commentDrafts[post.id] || ''}
                  onChange={e => setCommentDrafts({ ...commentDrafts, [post.id]: e.target.value })}
                  placeholder="Add a comment..."
                  className="flex-1 bg-black border border-gray-800 text-white text-xs rounded p-1 focus:outline-none"
                />
                <button onClick={() => handleComment(post.id)} className="px-2 py-1 rounded bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-500 transition">Comment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 