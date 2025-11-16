import { Trophy, Star, Target, Award } from "lucide-react";

interface Screen3Props {
    isVisible: boolean;
}

const Screen3 = ({ isVisible }: Screen3Props) => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-rose-500 p-6 flex flex-col">
            <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Trophy className="text-white" size={40} />
                </div>
                <h2 className="text-white text-3xl font-bold mb-2">Workout Complete!</h2>
                <p className="text-white/80">Amazing job on crushing it today 🎉</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                        <p className="text-white/70 text-sm mb-1">Duration</p>
                        <p className="text-white text-3xl font-bold">42:38</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white/70 text-sm mb-1">Calories</p>
                        <p className="text-white text-3xl font-bold">387</p>
                    </div>
                </div>
                <div className="h-px bg-white/20 my-4" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-white/70 text-sm mb-1">Avg Heart Rate</p>
                        <p className="text-white text-2xl font-bold">134</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white/70 text-sm mb-1">Form Score</p>
                        <p className="text-white text-2xl font-bold">96%</p>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                        <Star className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">New Personal Best!</p>
                        <p className="text-white/70 text-xs">Longest workout this month</p>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                        <Target className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">Weekly Goal Reached</p>
                        <p className="text-white/70 text-xs">6 workouts completed this week</p>
                    </div>
                    <Award className="text-yellow-300" size={24} />
                </div>
            </div>

            <button className="w-full bg-white text-orange-500 rounded-2xl py-4 font-bold text-lg shadow-lg">
                Share Achievement
            </button>
        </div>
    );
};

export default Screen3;
