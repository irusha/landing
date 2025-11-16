import { Play, Heart, TrendingUp } from "lucide-react";

interface Screen1Props {
    isVisible: boolean;
}

const Screen1 = ({ isVisible }: Screen1Props) => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <div className="text-white">
                    <p className="text-sm opacity-80">Good Morning</p>
                    <h2 className="text-2xl font-bold">Alex</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl">👋</span>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-lg font-semibold">Today's Workout</h3>
                    <Play className="text-white" size={24} />
                </div>
                <p className="text-white/80 text-sm mb-4">Full Body AR Training</p>
                <div className="flex gap-4">
                    <div className="flex-1 bg-white/10 rounded-xl p-3">
                        <p className="text-white/60 text-xs">Duration</p>
                        <p className="text-white font-bold">45 min</p>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-xl p-3">
                        <p className="text-white/60 text-xs">Calories</p>
                        <p className="text-white font-bold">380</p>
                    </div>
                </div>
            </div>

            <div className="space-y-3 flex-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
                        <Heart className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">Heart Rate Zone</p>
                        <p className="text-white/70 text-xs">Optimal fat burn</p>
                    </div>
                    <p className="text-white font-bold">128 bpm</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                        <TrendingUp className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">Weekly Progress</p>
                        <p className="text-white/70 text-xs">5 of 6 workouts done</p>
                    </div>
                    <p className="text-white font-bold">83%</p>
                </div>
            </div>

            <div className="mt-auto">
                <button className="w-full bg-white text-cyan-600 rounded-2xl py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
                    Start AR Session
                </button>
            </div>
        </div>
    );
};

export default Screen1;
