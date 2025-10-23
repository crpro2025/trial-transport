'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { trainingModules } from '@/lib/training-modules';
import { TrainingModule } from '@/lib/extended-types';

export default function DriverTraining() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Mock completed modules
  const completedModules = ['hipaa-compliance', 'specimen-handling'];

  useEffect(() => {
    if (!user || user.role !== 'driver') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'driver') {
    return null;
  }

  const handleStartModule = (module: TrainingModule) => {
    setSelectedModule(module);
    setCurrentContentIndex(0);
    setQuizStarted(false);
    setQuizAnswers([]);
    setQuizCompleted(false);
  };

  const handleNextContent = () => {
    if (selectedModule && currentContentIndex < selectedModule.content.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else {
      setQuizStarted(true);
    }
  };

  const handlePrevContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    if (!selectedModule) return;
    
    let correct = 0;
    selectedModule.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correctAnswer) {
        correct++;
      }
    });
    
    const score = (correct / selectedModule.quiz.length) * 100;
    setQuizScore(score);
    setQuizCompleted(true);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hipaa': return 'from-red-500 to-pink-500';
      case 'specimen_handling': return 'from-blue-500 to-cyan-500';
      case 'temperature_control': return 'from-purple-500 to-indigo-500';
      case 'safety': return 'from-green-500 to-emerald-500';
      case 'emergency': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  if (selectedModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-white">{selectedModule.title}</h1>
                  <p className="text-gray-400 text-sm mt-1">{selectedModule.description}</p>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                >
                  Exit Module
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {!quizStarted ? (
              // Training Content
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">
                      Section {currentContentIndex + 1} of {selectedModule.content.length}
                    </span>
                    <span className="text-gray-400">
                      {selectedModule.content[currentContentIndex].duration} min
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                      style={{ width: `${((currentContentIndex + 1) / selectedModule.content.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div 
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedModule.content[currentContentIndex].content
                        .replace(/^# /gm, '<h1 class="text-3xl font-bold text-white mb-4">')
                        .replace(/^## /gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">')
                        .replace(/^### /gm, '<h3 class="text-xl font-bold text-white mt-4 mb-2">')
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                        .replace(/^- /gm, '<li class="ml-4">')
                        .replace(/^\d+\. /gm, '<li class="ml-4 list-decimal">')
                        .replace(/\n\n/g, '</p><p class="mb-4">')
                        .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
                    }}
                  />
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={handlePrevContent}
                    disabled={currentContentIndex === 0}
                    className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleNextContent}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    {currentContentIndex === selectedModule.content.length - 1 ? 'Start Quiz →' : 'Next →'}
                  </button>
                </div>
              </div>
            ) : !quizCompleted ? (
              // Quiz
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Knowledge Check</h2>
                <p className="text-gray-400 mb-8">
                  Answer all questions to complete the module. Passing score: {selectedModule.passingScore}%
                </p>

                <div className="space-y-6">
                  {selectedModule.quiz.map((question, qIndex) => (
                    <div key={question.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <p className="text-white font-medium mb-4">
                        {qIndex + 1}. {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <label
                            key={oIndex}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                              quizAnswers[qIndex] === oIndex
                                ? 'border-blue-500 bg-blue-500/20'
                                : 'border-white/10 hover:bg-white/5'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => handleQuizAnswer(qIndex, oIndex)}
                              className="mr-3"
                            />
                            <span className="text-gray-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setQuizStarted(false)}
                    className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                  >
                    ← Back to Content
                  </button>
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={quizAnswers.length !== selectedModule.quiz.length}
                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Quiz
                  </button>
                </div>
              </div>
            ) : (
              // Quiz Results
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  quizScore >= selectedModule.passingScore
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500'
                    : 'bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-500'
                }`}>
                  <span className="text-5xl font-bold text-white">{Math.round(quizScore)}%</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  {quizScore >= selectedModule.passingScore ? 'Congratulations!' : 'Keep Learning'}
                </h2>
                <p className="text-gray-400 mb-8">
                  {quizScore >= selectedModule.passingScore
                    ? `You've successfully completed ${selectedModule.title}!`
                    : `You need ${selectedModule.passingScore}% to pass. Review the material and try again.`}
                </p>

                {quizScore >= selectedModule.passingScore && selectedModule.certificateIssued && (
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-white font-medium">Certificate Earned!</p>
                    <p className="text-gray-400 text-sm mt-2">Your certificate has been added to your profile</p>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  {selectedModule.quiz.map((question, qIndex) => (
                    <div key={question.id} className="bg-white/5 rounded-xl p-4 border border-white/10 text-left">
                      <div className="flex items-start gap-3">
                        {quizAnswers[qIndex] === question.correctAnswer ? (
                          <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <div className="flex-1">
                          <p className="text-white font-medium mb-2">{question.question}</p>
                          <p className="text-gray-400 text-sm mb-1">
                            Your answer: {question.options[quizAnswers[qIndex]]}
                          </p>
                          {quizAnswers[qIndex] !== question.correctAnswer && (
                            <p className="text-green-400 text-sm mb-2">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-gray-400 text-sm italic">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  {quizScore < selectedModule.passingScore && (
                    <button
                      onClick={() => {
                        setQuizStarted(false);
                        setQuizAnswers([]);
                        setQuizCompleted(false);
                        setCurrentContentIndex(0);
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                      Review & Retry
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                  >
                    Back to Training
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Driver Training Center
                </h1>
                <p className="text-gray-400 mt-1">Complete required training to start delivering</p>
              </div>
              <button
                onClick={() => router.push('/driver/dashboard')}
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Overview */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Training Progress</h2>
              <span className="text-gray-400">
                {completedModules.length} of {trainingModules.filter(m => m.required).length} required modules completed
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
                style={{ width: `${(completedModules.length / trainingModules.filter(m => m.required).length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Training Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module) => {
              const isCompleted = completedModules.includes(module.id);
              
              return (
                <div
                  key={module.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${getCategoryColor(module.category)} bg-opacity-20 rounded-xl`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    {isCompleted && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-400 text-sm font-medium">Completed</span>
                      </div>
                    )}
                    {module.required && !isCompleted && (
                      <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                        Required
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{module.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {module.duration} min
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {module.content.length} sections
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {module.quiz.length} questions
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartModule(module)}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                      isCompleted
                        ? 'border border-white/20 hover:bg-white/5'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50'
                    }`}
                  >
                    {isCompleted ? 'Review Module' : 'Start Training'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}