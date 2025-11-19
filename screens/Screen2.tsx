import { Camera, Zap, CheckCircle } from "lucide-react";

interface Screen2Props {
    isVisible: boolean;
}

const Screen2 = ({ isVisible }: Screen2Props) => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-2xl font-bold">AR Training</h2>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Camera className="text-white" size={20} />
                </div>
            </div>

            <div className="relative flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full border-4 border-white/30 flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full border-4 border-white/50 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="text-white text-6xl">🏃</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-emerald-400 rounded-full px-4 py-1">
                            <p className="text-white text-xs font-bold">Perfect Form!</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white text-sm">Exercise Progress</p>
                            <p className="text-white font-bold">12/15</p>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-white rounded-full h-2" style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <Zap className="text-yellow-300 mx-auto mb-1" size={20} />
                    <p className="text-white text-xs">Intensity</p>
                    <p className="text-white font-bold text-lg">High</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <CheckCircle className="text-emerald-300 mx-auto mb-1" size={20} />
                    <p className="text-white text-xs">Form Score</p>
                    <p className="text-white font-bold text-lg">98%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <span className="text-2xl block mb-1">🔥</span>
                    <p className="text-white text-xs">Calories</p>
                    <p className="text-white font-bold text-lg">156</p>
                </div>
            </div>

            <button className="w-full bg-white text-violet-600 rounded-2xl py-4 font-bold text-lg shadow-lg">
                Next Exercise
            </button>
        </div>
    );
};

export default Screen2;
